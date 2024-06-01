export type GalleryModel = {
    id?: string
    title: string
    create_date: string,
    images: ImageModel[]
}

export type ImageModel = {
    id?: string
    url: string
    upload_date: string,
}