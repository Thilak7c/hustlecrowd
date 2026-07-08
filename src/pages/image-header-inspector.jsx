import ImageHeaderInspector from '../components/ImageHeaderInspector';
import { NavbarDark, FooterDark } from '../components'
import { Helmet } from 'react-helmet';

const ImageHeaderInspectorPage = () => {
  return (
    <>
      <Helmet>
        <title>Image says .jpg but behaves like WebP | Image Header Inspector</title>
        <meta name="description" content="When an image says .jpg but behaves like WebP, the file header is wrong. Detect the real image format using magic bytes and fix the mismatch instantly." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Image Header Inspector",
            "applicationCategory": "DeveloperTool",
            "operatingSystem": "Web",
            "description": "Detect when an image says JPG but behaves like WebP by inspecting real image headers and fixing format mismatches.",
            "url": "https://hustlecrowd.my/image-header-inspector"
          }
          `}
        </script>
        <link rel="canonical" href="https://hustlecrowd.my/image-header-inspector" />
      </Helmet>
      
      <NavbarDark />
      <ImageHeaderInspector />
      <FooterDark />
    </>
  );
};

export default ImageHeaderInspectorPage;
