"use client";
import React from 'react';
import { Container } from '@/components/Container';
import dynamic from 'next/dynamic';
const PdfViewer = dynamic(() => import("@/components/PdfViewer"), { ssr: false });



export default function TermsPage({}){
      return(
            <Container>
                <h1>Terms and Condition</h1>
                <PdfViewer url='https://bengkelhubblob.blob.core.windows.net/internal-documents/terms-of-service.pdf'></PdfViewer>
            </Container>
        )
}

