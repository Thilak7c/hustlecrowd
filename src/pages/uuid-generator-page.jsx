import { NavbarDark, FooterDark } from '../components'
import { Helmet } from 'react-helmet';
import UUIDGenerator from '../components/UUIDGenerator';

const UUIDGeneratorPage = () => {
  return (
    <>
      <Helmet>
        <title>UUID Generator (v4) - Generate & Copy UUIDs Online</title>
        <meta name="description" content="Free UUID v4 generator for developers. Instantly generate and copy RFC 4122-compliant UUIDs. No signup required." />
        <script type="application/ld+json">
            {`
            {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                "@type": "Question",
                "name": "What is a UUID?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A UUID is a 128-bit identifier used to uniquely identify information across systems."
                }
                },
                {
                "@type": "Question",
                "name": "Can UUIDs collide?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The probability of UUID v4 collisions is astronomically low and safe for most applications."
                }
                },
                {
                "@type": "Question",
                "name": "Should I use UUID or auto-increment IDs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "UUIDs are better for distributed systems, while auto-increment IDs are simpler for single databases."
                }
                }
            ]
            }
            `}
        </script>

        <link rel="canonical" href="https://hustlecrowd.my/tools/uuid-generator" />
      </Helmet>
      
      <NavbarDark />
      <UUIDGenerator />
      <FooterDark />
    </>
  );
};

export default UUIDGeneratorPage;
