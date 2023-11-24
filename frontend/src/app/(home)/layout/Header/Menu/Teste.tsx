import { useContext, useMemo, ReactNode } from 'react';
import { MenuContext } from '../../../contexts/MenuProvider';

// interface TesteProps {
//   children: ReactNode;
// }

export default function Teste() {
  const { toggleSelectedMenu, selectedMenu } = useContext(MenuContext)!;

  // const optionValue = useMemo(() => String(Math.random()), []);
  // const matchValue = selectedMenu === optionValue;

  const menu = [
    {
      option: 1,
      links: [
        { departament: 'Lampadas', link: '/lamp' },
        { departament: 'Arrow', link: '/arrow' },
        { departament: 'Corda', link: '/lamp' },
        { departament: 'Torneira', link: '/lamp' },
        { departament: 'Fios', link: '/lamp' },
      ],
    },
    {
      option: 2,
      links: [
        { departament: 'asdfasd', link: '/lamp' },
        { departament: 'asdadasdatgghg', link: '/arrow' },
        { departament: 'asdassdqwera  da  sdasd', link: '/lamp' },
        { departament: 'Toasda  sdada srfwerswfwetfrneira', link: '/lamp' },
        { departament: 'asmofsiandfin', link: '/lamp' },
      ],
    },
    {
      option: 3,
      links: [
        { departament: 'aaaaasa', link: '/lamp' },
        { departament: 'sssdasgsdfgqsfdsf', link: '/arrow' },
        { departament: 'Corshrdftj3rfthdgergda', link: '/lamp' },
        { departament: 'sdfsfehj3rfjdrge1rtg', link: '/lamp' },
        { departament: 'sdfshergheghefg', link: '/lamp' },
      ],
    },
    {
      option: 4,
      links: [
        { departament: 'aaaamosdfijasdjiasdaasa', link: '/lamp' },
        { departament: 'ff', link: '/arrow' },
        { departament: 'gghdg', link: '/lamp' },
        { departament: 'qwerd', link: '/lamp' },
        { departament: 'jkikkk', link: '/lamp' },
      ],
    },
  ];

  const encontrado = menu.find((item) => item.option === selectedMenu);

  function handleSelectedMenu(value: number) {
    if (window.innerWidth >= 900) {
      toggleSelectedMenu(value);
    }
  }

  return (
    // <div className="flex bg-red-400">
    //   <div className="w-56 bg-blue-200">
    //     <ul className="space-y-2">
    //       <li onMouseEnter={() => handleSelectedMenu(1)}>Opção 1</li>
    //       <li onMouseEnter={() => handleSelectedMenu(2)}>Opção 2</li>
    //       <li onMouseEnter={() => handleSelectedMenu(3)}>Opção 3</li>
    //       <li onMouseEnter={() => handleSelectedMenu(4)}>Opção 4</li>
    //     </ul>
    //   </div>

    //   <div className="w-full bg-green-400">
    //     {encontrado &&
    //       encontrado.links.map((item, index) => (
    //         <span key={index}>{item.departament}</span>
    //       ))}
    //   </div>
    // </div>

    <li className="flex">
      <ul className="w-56">
        <li onMouseEnter={() => handleSelectedMenu(1)}>Opção 1</li>
        <li onMouseEnter={() => handleSelectedMenu(2)}>Opção 2</li>
        <li onMouseEnter={() => handleSelectedMenu(3)}>Opção 3</li>
        <li onMouseEnter={() => handleSelectedMenu(4)}>Opção 4</li>
      </ul>
      <ul className="w-full">
        {encontrado &&
          encontrado.links.map((item, index) => (
            <li key={index}>{item.departament}</li>
          ))}
      </ul>
    </li>

    // <li className="flex">
    //   <ul className="w-1/4 bg-green-400" onMouseEnter={handleSelectedMenu}>
    //     <li>titulo</li>
    //   </ul>
    //   <ul className="w-3/4 bg-violet-300">
    //     {matchValue &&
    //       children.map((item, index) => <li key={index}>{item}</li>)}
    //   </ul>
    // </li>
  );
}
