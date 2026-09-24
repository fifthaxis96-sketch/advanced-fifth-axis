import type { Metadata } from "next";
import { CollectionIndex } from "@/components/LocalizedSite";
export const metadata: Metadata = { title: "فئات معدات حفر الأساسات في السعودية", description: "تصفح أدوات حفر الأساسات وقطع التآكل ومواسير التغليف وأنظمة كيلي والمكونات المصنعة حسب الطلب في السعودية.", alternates:{canonical:"https://advanced-fifthaxis.com/ar/collections",languages:{en:"https://advanced-fifthaxis.com/collections",ar:"https://advanced-fifthaxis.com/ar/collections"}} };
export default function CollectionsPage(){return <CollectionIndex lang="ar"/>;}