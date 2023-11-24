import { useContext } from 'react';
import { MenuContext } from '../../../contexts/MenuProvider';
import { Icon } from '@iconify/react';

export default function MenuItems() {
  const { toggleSelectedMenu, selectedMenu } = useContext(MenuContext)!;

  const menu = [
    {
      id: 1,
      title: 'Materiais elétricos',
      links: [
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Arrow', link: '/arrow' },
        { departament: 'Corda', link: '/lamp' },
        { departament: 'Torneira', link: '/lamp' },
        { departament: 'Fios', link: '/lamp' },
        { departament: 'Fios', link: '/lamp' },
        { departament: 'Fios', link: '/lamp' },
        { departament: 'Fios', link: '/lamp' },
        { departament: 'Fios', link: '/lamp' },
        { departament: 'Fios', link: '/lamp' },
        { departament: 'Fios', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Lampadas', link: '/lamp' },
      ],
    },
    {
      id: 2,
      title: 'Chuveiros',
      links: [
        { departament: 'asdfasd', link: '/lamp' },
        { departament: 'asdadasdatgghg', link: '/arrow' },
        { departament: 'asdassdqwera  da  sdasd', link: '/lamp' },
        { departament: 'Toasda  sdada srfwerswfwetfrneira', link: '/lamp' },
        { departament: 'asmofsiandfin', link: '/lamp' },
      ],
    },
    {
      id: 3,
      title: 'Parafusos',
      links: [
        { departament: 'aaaaasa', link: '/lamp' },
        { departament: 'sssdasgsdfgqsfdsf', link: '/arrow' },
        { departament: 'Corshrdftj3rfthdgergda', link: '/lamp' },
        { departament: 'sdfsfehj3rfjdrge1rtg', link: '/lamp' },
        { departament: 'sdfshergheghefg', link: '/lamp' },
      ],
    },
    {
      id: 4,
      title: 'Fios e extensões',
      links: [
        { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
        { departament: 'ff', link: '/arrow' },
        { departament: 'gghdg', link: '/lamp' },
        { departament: 'qwerd', link: '/lamp' },
        { departament: 'jkikkk', link: '/lamp' },
      ],
    },
    {
      id: 5,
      title: 'Fios e extensões',
      links: [
        { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
        { departament: 'ff', link: '/arrow' },
        { departament: 'gghdg', link: '/lamp' },
        { departament: 'qwerd', link: '/lamp' },
        { departament: 'jkikkk', link: '/lamp' },
      ],
    },
    {
      id: 6,
      title: 'Fios e extensões',
      links: [
        { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
        { departament: 'ff', link: '/arrow' },
        { departament: 'gghdg', link: '/lamp' },
        { departament: 'qwerd', link: '/lamp' },
        { departament: 'jkikkk', link: '/lamp' },
      ],
    },
    {
      id: 7,
      title: 'Fios e extensões',
      links: [
        { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
        { departament: 'ff', link: '/arrow' },
        { departament: 'gghdg', link: '/lamp' },
        { departament: 'qwerd', link: '/lamp' },
        { departament: 'jkikkk', link: '/lamp' },
      ],
    },
    {
      id: 8,
      title: 'Fios e extensões',
      links: [
        { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
        { departament: 'ff', link: '/arrow' },
        { departament: 'gghdg', link: '/lamp' },
        { departament: 'qwerd', link: '/lamp' },
        { departament: 'jkikkk', link: '/lamp' },
      ],
    },
    {
      id: 9,
      title: 'Fios e extensões',
      links: [
        { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
        { departament: 'ff', link: '/arrow' },
        { departament: 'gghdg', link: '/lamp' },
        { departament: 'qwerd', link: '/lamp' },
        { departament: 'jkikkk', link: '/lamp' },
      ],
    },
  ];

  const encontrado = menu.find((item) => item.id === selectedMenu);

  function handleSelectedMenu(id: number) {
    if (window.innerWidth >= 900) {
      toggleSelectedMenu(id);
    }
  }

  return (
    <li className="flex">
      <ul>
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-5 py-2 cursor-pointer bg-brand-primaryDark w-56 last:rounded-bl-lg`}
            onMouseEnter={() => handleSelectedMenu(item.id)}
          >
            <a className="text-white font-medium text-sm" href="#">
              {item.title}
            </a>
            <Icon
              className="hidden lg:block rotate-90 w-6 h-6 text-white"
              icon="iconamoon:arrow-up-2"
            />
            <Icon
              onClick={() => toggleSelectedMenu(item.id)}
              className={`${
                encontrado ? 'rotate-45' : 'rotate-0'
              } transition-all lg:hidden w-6 h-6 text-white`}
              icon="heroicons:plus"
            />
          </li>
        ))}
      </ul>
      {encontrado && (
        <ul className="w-full  overflow-hidden bg-brand-primary lg:bg-white lg:border-b-2 lg:border-r-2 border-brand-primaryDark lg:rounded-br-lg p-[30px]">
          <h4 className="font-semibold text-xl hidden lg:block">
            {encontrado.title}
          </h4>
          <div className="border-t border-background-softLight mt-4 mb-7 hidden lg:block"></div>
          <div className="teste">
            {encontrado &&
              encontrado.links.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-sm hover:text-brand-secondary"
                  >
                    {item.departament}
                  </a>
                </li>
              ))}
          </div>
        </ul>
      )}
    </li>
  );
}

// import { useContext } from 'react';
// import { MenuContext } from '../../../contexts/MenuProvider';
// import { Icon } from '@iconify/react';

// export default function MenuItems() {
//   const { toggleSelectedMenu, selectedMenu } = useContext(MenuContext)!;

//   const menu = [
//     {
//       id: 1,
//       title: 'Materiais elétricos',
//       links: [
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Arrow', link: '/arrow' },
//         { departament: 'Corda', link: '/lamp' },
//         { departament: 'Torneira', link: '/lamp' },
//         { departament: 'Fios', link: '/lamp' },
//         { departament: 'Fios', link: '/lamp' },
//         { departament: 'Fios', link: '/lamp' },
//         { departament: 'Fios', link: '/lamp' },
//         { departament: 'Fios', link: '/lamp' },
//         { departament: 'Fios', link: '/lamp' },
//         { departament: 'Fios', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//         { departament: 'Lampadas', link: '/lamp' },
//       ],
//     },
//     {
//       id: 2,
//       title: 'Chuveiros',
//       links: [
//         { departament: 'asdfasd', link: '/lamp' },
//         { departament: 'asdadasdatgghg', link: '/arrow' },
//         { departament: 'asdassdqwera  da  sdasd', link: '/lamp' },
//         { departament: 'Toasda  sdada srfwerswfwetfrneira', link: '/lamp' },
//         { departament: 'asmofsiandfin', link: '/lamp' },
//       ],
//     },
//     {
//       id: 3,
//       title: 'Parafusos',
//       links: [
//         { departament: 'aaaaasa', link: '/lamp' },
//         { departament: 'sssdasgsdfgqsfdsf', link: '/arrow' },
//         { departament: 'Corshrdftj3rfthdgergda', link: '/lamp' },
//         { departament: 'sdfsfehj3rfjdrge1rtg', link: '/lamp' },
//         { departament: 'sdfshergheghefg', link: '/lamp' },
//       ],
//     },
//     {
//       id: 4,
//       title: 'Fios e extensões',
//       links: [
//         { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
//         { departament: 'ff', link: '/arrow' },
//         { departament: 'gghdg', link: '/lamp' },
//         { departament: 'qwerd', link: '/lamp' },
//         { departament: 'jkikkk', link: '/lamp' },
//       ],
//     },
//     {
//       id: 5,
//       title: 'Fios e extensões',
//       links: [
//         { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
//         { departament: 'ff', link: '/arrow' },
//         { departament: 'gghdg', link: '/lamp' },
//         { departament: 'qwerd', link: '/lamp' },
//         { departament: 'jkikkk', link: '/lamp' },
//       ],
//     },
//     {
//       id: 6,
//       title: 'Fios e extensões',
//       links: [
//         { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
//         { departament: 'ff', link: '/arrow' },
//         { departament: 'gghdg', link: '/lamp' },
//         { departament: 'qwerd', link: '/lamp' },
//         { departament: 'jkikkk', link: '/lamp' },
//       ],
//     },
//     {
//       id: 7,
//       title: 'Fios e extensões',
//       links: [
//         { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
//         { departament: 'ff', link: '/arrow' },
//         { departament: 'gghdg', link: '/lamp' },
//         { departament: 'qwerd', link: '/lamp' },
//         { departament: 'jkikkk', link: '/lamp' },
//       ],
//     },
//     {
//       id: 8,
//       title: 'Fios e extensões',
//       links: [
//         { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
//         { departament: 'ff', link: '/arrow' },
//         { departament: 'gghdg', link: '/lamp' },
//         { departament: 'qwerd', link: '/lamp' },
//         { departament: 'jkikkk', link: '/lamp' },
//       ],
//     },
//     {
//       id: 9,
//       title: 'Fios e extensões',
//       links: [
//         { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
//         { departament: 'ff', link: '/arrow' },
//         { departament: 'gghdg', link: '/lamp' },
//         { departament: 'qwerd', link: '/lamp' },
//         { departament: 'jkikkk', link: '/lamp' },
//       ],
//     },
//   ];

//   const encontrado = menu.find((item) => item.id === selectedMenu);

//   function handleSelectedMenu(id: number) {
//     if (window.innerWidth >= 900) {
//       toggleSelectedMenu(id);
//     }
//   }

//   return (
//     <li className="flex">
//       <ul>
//         {menu.map((item, index) => (
//           <li
//             key={index}
//             className={`flex items-center justify-between px-5 py-2 cursor-pointer bg-brand-primaryDark w-56 last:rounded-bl-lg`}
//             onMouseEnter={() => handleSelectedMenu(item.id)}
//           >
//             <a className="text-white font-medium text-sm" href="#">
//               {item.title}
//             </a>
//             <Icon
//               className="hidden lg:block rotate-90 w-6 h-6 text-white"
//               icon="iconamoon:arrow-up-2"
//             />
//             <Icon
//               onClick={() => toggleSelectedMenu(item.id)}
//               className={`${
//                 encontrado ? 'rotate-45' : 'rotate-0'
//               } transition-all lg:hidden w-6 h-6 text-white`}
//               icon="heroicons:plus"
//             />
//           </li>
//         ))}
//       </ul>
//       {encontrado && (
//         <ul className="w-full  overflow-hidden bg-brand-primary lg:bg-white lg:border-b-2 lg:border-r-2 border-brand-primaryDark lg:rounded-br-lg p-[30px]">
//           <h4 className="font-semibold text-xl hidden lg:block">
//             {encontrado.title}
//           </h4>
//           <div className="border-t border-background-softLight mt-4 mb-7 hidden lg:block"></div>
//           <div className="teste">
//             {encontrado &&
//               encontrado.links.map((item, index) => (
//                 <li key={index}>
//                   <a
//                     href={item.link}
//                     className="text-sm hover:text-brand-secondary"
//                   >
//                     {item.departament}
//                   </a>
//                 </li>
//               ))}
//           </div>
//         </ul>
//       )}
//     </li>
//   );
// }
