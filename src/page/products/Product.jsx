import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react"
import { BASE_URL } from '../../lib/contant';
import { RiDeleteBin6Fill } from "react-icons/ri";

const columns = [
	{
		name: 'Product Name',
		selector: row => row.name,
	},
	{
		name: 'Image',
		selector: row => <div>
            <img width={60} height={60} src={row.image} alt={row.name} />
        </div>,
	},
    {
		name: 'Price',
		selector: row => row.price,
        sortable: true,
	},
	{
		name: 'Quantity',
		selector: row => row.quantity,
	},
    {
		name: 'Seller',
		selector: row => row.seller,
	},
    {
		name: 'Action',
		selector: row => (
        <div className='flex flex-rows'>
            <button className='text-blue-600'>View</button>
            <button><RiDeleteBin6Fill className='ml-2 text-red-600'/></button>
        </div>
        )
	},
];

export default function Product() {
    const [products, setProduct] = useState([]);
    // fetch product
    useEffect(() => {
        fetch(`${BASE_URL}products`)
        .then((res) => res.json())
        .then((data) => {
            // console.log("data", data)
            setProduct(data.results)
        });
    }, []);
    // console.log("Product", products)
    return (
    <div>
      <DataTable
			columns={columns}
			data={products}
            fixedHeader
            pointerOnHover
            highlightOnHover
		/>
    </div>
  )
}
