// 'use client';

// // pass in selected color
// export default function SizeSelect(params: type) {
//   const router = useRouter();

//   function handleSizeSelect(s: SizeVariant) {
//     setSelectedSize(s.size);
//     router.push(`${pathname}?${createQueryString('size', s.size)}`, {
//       scroll: false
//     });
//   }

//   return (
//     <div className='flex flex-wrap gap-4 mt-2'>
//       {selectedColor.sizes.map((s) => (
//         <button
//           key={s.size}
//           className={`btn-square text-xl ${
//             selectedSize === s.size && 'bg-primary text-secondary'
//           }`}
//           onClick={() => handleSizeSelect(s)}
//           disabled={s.quantity === 0 ? true : false}
//         >
//           {s.size}
//         </button>
//       ))}
//     </div>
//   );
// }
