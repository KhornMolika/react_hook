import { Card } from "flowbite-react";

export default function ProductDetailCard({
  image,
  title,
  description,
  price,
}) {
  return (
    <Card className="max-w-sm">
      <div >
        <img className="h-[240px] object-cover" src={image} alt={title} />
      </div>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-cyan-800 dark:text-white truncate mb-3">
          {title ? title : "no title"}
        </h5>
        <p className="text-md font-semibold tracking-tight text-gray-800 dark:text-white">
          {description || "no description"}
        </p>
      </a>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-cyan-900 dark:text-white">
          ${price ? price : "unavailable"}
        </span>
      </div>
    </Card>
  );
}
