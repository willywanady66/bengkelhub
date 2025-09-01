"use client";

import React from 'react';
import { Container } from '@/components/Container';
import dynamic from 'next/dynamic';
const PdfViewer = dynamic(() => import("@/components/PdfViewer"), { ssr: false });

export default function PrivacyPage({}){
    return(
        <Container>
            <h1>Privacy Policy</h1>
            <PdfViewer url='https://bengkelhubblob.blob.core.windows.net/internal-documents/privacy-policy.pdf'></PdfViewer>
        </Container>
    )
}

