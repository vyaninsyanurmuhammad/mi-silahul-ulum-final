'use client'

import { NewsModel } from "@/app/models/news-model";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Input, Pagination, Table, TableBody, TableColumn, TableHeader, User } from "@nextui-org/react"
import React, { useCallback, useState } from 'react'

export default function NewsAdminPage() {
    
    const [page, setPage] = useState(1);
    const [filterValue, setFilterValue] = useState("");

    const onSearchChange = useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const renderCell = useCallback((news: NewsModel, columnKey: React.Key) => {
        const cellValue = news[columnKey as keyof NewsModel];

        switch (columnKey) {
            case "image":
                return (
                    <Image
                        src={news.image_url}
                    >
                    </Image>
                );
            case "title":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{news.title}</p>
                    </div>
                );
            case "uploader":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{news.uploader}</p>
                    </div>
                );

            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>View</DropdownItem>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <>
            <div className="flex w-full flex-col gap-4 p-6 sm:p-12 overflow-hidden">

                <Table
                    aria-label="News table"
                    topContent={
                        <div className="flex justify-between gap-3 items-center h-fit">
                            <Input
                                isClearable
                                className="w-full"
                                placeholder="Search by name..."
                                startContent={<MagnifyingGlassIcon className="w-3 h-3 text-night-800" />}
                                value={filterValue}
                                onClear={() => onClear()}
                                onValueChange={onSearchChange}
                            />
                            <div className="flex gap-3 h-full shrink">
                                <Button className="flex bg-aztec-500 text-white shrink" endContent={<PlusIcon className="w-5 h-5" />}>
                                    Add New
                                </Button>
                            </div>
                        </div>
                    }
                    topContentPlacement="outside"
                    bottomContent={
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                page={page}
                                total={1}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                    }
                >
                    <TableHeader>
                        <TableColumn key="image">Image</TableColumn>
                        <TableColumn key="title">Title</TableColumn>
                        <TableColumn key="uploader">Uploader</TableColumn>
                        <TableColumn key="actions">Actions</TableColumn>
                    </TableHeader>

                    <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>

                </Table>

            </div>
        </>
    )
}
