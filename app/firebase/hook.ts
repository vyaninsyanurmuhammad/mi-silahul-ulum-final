import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useState } from "react"
import { storage } from "./firebaseConfig"
import { v4 } from "uuid"

export const useFireStorage = () => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState<Error | null>(null)
    const [url, setUrl] = useState<string | null>(null)

    const uploadImage = (file: File, ...destination: string[]) => {

        if (!file) return

        const fileId = v4()
        const formatFile = file.type.split('/')[1]

        const storageRef = ref(storage, `${destination.join("/")}${fileId}.${formatFile}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                setProgress(progress)
            },
            (error) => {
                setError(error)
            },
            async () => {
                const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)

                setUrl(downloadUrl)
                setProgress(progress)

            }
        )
    }

    return { progress, error, url, uploadImage }
}