"use client";
import React from 'react';
import { Container } from '@/components/Container';
import dynamic from 'next/dynamic';
import TermsConditionContent from './TermsConditionContent';
const PdfViewer = dynamic(() => import("@/components/PdfViewer"), { ssr: false });



export default function TermsPage({}){
      return(
            <Container>
                <title>Terms and Condition</title>
                <h1>Terms and Condition</h1>
               <TermsConditionContent className="mt-8"/>
            </Container>
        )
}

