import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { caseStudies, getCaseStudy } from '@/data/case-studies';
import { CaseStudyPage } from '@/components/sections/work/CaseStudyPage';
import { Container, Button, GlassPane } from '@/components/ui';

interface PageProps {
 params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 const cs = getCaseStudy(params.slug);
 if (!cs) return { title: 'Not Found' };
 
 return {
 title: `${cs.title} — Imaginta Case Study`,
 description: cs.status === 'published' 
 ? `How we helped ${cs.title} through brand identity, product design, and a custom digital platform.`
 : `Coming soon: Case study for ${cs.title}.`,
 };
}

export async function generateStaticParams() {
 return caseStudies.map((cs) => ({
 slug: cs.id,
 }));
}

export default function Page({ params }: PageProps) {
 const cs = getCaseStudy(params.slug);

 if (!cs) {
 notFound();
 }

 // Structured Data (JSON-LD)
 const jsonLd = {
 "@context": "https://schema.org",
 "@type": "Article",
 "headline": `${cs.title} — Brand & Digital Transformation`,
 "description": cs.status === 'published' 
 ? `How we helped ${cs.title} through brand identity, product design, and a custom digital platform.`
 : `Coming soon: Case study for ${cs.title}.`,
 "author": { "@type": "Organization", "name": "Imaginta" },
 "datePublished": "2025-01-15",
 };

 if (cs.status === 'coming-soon') {
 return (
 <main className="bg-void min-h-screen py-32 flex items-center justify-center">
 <Container>
 <div className="max-w-[500px] mx-auto">
 <GlassPane className="p-12 text-center border-accent-base/10 bg-accent-base/5">
 <h1 className="text-[24px] font-bold text-warm-white mb-4">Coming Soon</h1>
 <p className="text-[#F5F2ED]/40 mb-8">This case study is currently being written. Check back soon for the full story.</p>
 <Button href="/work" variant="ghost">← Back to Use Cases</Button>
 </GlassPane>
 </div>
 </Container>
 </main>
 );
 }

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
 />
 <CaseStudyPage caseStudy={cs} />
 </>
 );
}
