'use client'
import useProdutos from "@/data/hooks/useProdutos"
import { useState, useEffect } from "react"
import { Produto } from '@gstore/core'


export default function PaginaProduto(props: any) {
    const { obterProdutoPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)
    
    useEffect(() => {
        obterProdutoPorId(+props.params.id).then(setProduto)
    }, [props.params.id, obterProdutoPorId])

    return produto ? <div>{produto?.nome}</div> : <div>Produto não encontrado</div>
}