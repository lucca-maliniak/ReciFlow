import { useState } from "react";

export interface IMOCK_NEWS {
  id: number;
  title: string;
  description: string;
  link: string;
  isLiked: boolean;
}

export const Mock = () => {
  const MOCK_NEWS = [
    { 
      id: 1, 
      title: 'São Paulo ganha 1ª loja do mundo que aceita recicláveis como pagamento', 
      description: 'Entre os dias 23 a 25 de maio, consumidores poderão trocar embalagens de cosméticos vazias por produtos exclusivos.',
      link: 'https://www.cnnbrasil.com.br/tecnologia/sao-paulo-ganha-1a-loja-do-mundo-que-aceita-reciclaveis-como-pagamento/',
      isLiked: false,
    },
    { 
      id: 2, 
      title: 'Economia circular pode gerar R$ 11 bilhões e 240 mil empregos, diz Ambipar', 
      description: 'VP de Sustentabilidade da companhia destacou desafios para reciclagem no Brasil; dados do governo mostram que menos de 2% dos resíduos são recuperados.',
      link: 'https://www.cnnbrasil.com.br/economia/macroeconomia/economia-circular-pode-gerar-r-11-bilhoes-e-240-mil-empregos-diz-ambipar/',
      isLiked: false,
    },
    { 
      id: 3, 
      title: 'Garrafas plásticas são transformadas em fonte de energia verde nos EUA', 
      description: 'Novo estudo propõe quebrar microplásticos antes que eles cheguem ao meio ambiente e transformá-los em combustível limpo.',
      link: 'https://www.cnnbrasil.com.br/tecnologia/garrafas-plasticas-sao-transformadas-em-fonte-de-energia-verde-nos-eua/',
      isLiked: false,
    }
  ]
  const [mockNews, setMockNews] = useState<IMOCK_NEWS[]>(MOCK_NEWS);

  return {
    mockNews,
    setMockNews,
  }
}