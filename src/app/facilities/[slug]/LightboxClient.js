'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function LightboxClient({ images }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = images.map((src) => ({ src }));

    return (
        <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="break-inside-avoid relative group overflow-hidden rounded-lg cursor-pointer bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${i + 1}`}
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 block"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-white bg-primary/90 px-6 py-2 rounded-full backdrop-blur-sm text-sm font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                View
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
            />
        </>
    );
}
