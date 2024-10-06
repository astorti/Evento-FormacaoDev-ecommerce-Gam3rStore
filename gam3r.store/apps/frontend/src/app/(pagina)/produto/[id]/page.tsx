'use client'
import useProdutos from "@/data/hooks/useProdutos"
import { useState, useEffect } from "react"
import { Produto } from '@gstore/core'
import TituloProduto from "@/components/produto/TituloProduto"
import InformacoesProduto from "@/components/produto/InformacoesProduto"
import BannerCompra from "@/components/produto/BannerCompra"
import MedidorDePreco from "@/components/produto/MedidorDePreco"
import AvaliacoesUsuarios from "@/components/produto/AvaliacoesUsuarios"
import AvaliacaoEspecializada from "@/components/produto/AvaliacaoEspecialista"
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado"


export default function PaginaProduto(props: any) {
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)
    
    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId])

    return produto ? (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
                <MedidorDePreco produto={produto} />
            </div>
            <AvaliacoesUsuarios produto={produto} />
            <AvaliacaoEspecializada produto={produto} />
        </div>
    ) : <ProdutoNaoEncontrado />
}