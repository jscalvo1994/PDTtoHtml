import Hero from "@/components/Hero/Hero.jsx";
import IndexSection from "@/components/Index/IndexSection.jsx";
import SocialMedia from "@/components/Index/SocialMedia.jsx";
import GeneralIndex from "@/components/Index/GeneralIndex.jsx";
import BisagrasContent from "@/components/Bisagras/BisagrasContent";
import BisagrasContent2 from "@/components/Bisagras/BisagrasContent2";
import GaleriaBisagra from "@/components/Galerias/GaleriaBisagras";
import BisagrasContent3 from "@/components/Bisagras/BisagrasContent3";
import BisagrasContent4 from "@/components/Bisagras/BisagrasContent4";
import BisagrasContent5 from "@/components/Bisagras/BisagrasContent5";
import BisagrasContent6 from "@/components/Bisagras/BisagrasContent6";
export default function Home() {
  return (
    <>
      <div>
<Hero />
<SocialMedia />
<IndexSection />
<GeneralIndex />
<BisagrasContent />
<BisagrasContent2 />
<GaleriaBisagra />
<BisagrasContent3 />
<BisagrasContent4 />
<BisagrasContent5 />
<BisagrasContent6 />
</div>
    </>
  );
}
