import React from "react"

const Pedidos = (props) => {
  const { data } = props

  return (
    <>
      <h1>Tratamento de entregas</h1>
      <div className="dados__cliente">
        <strong>Dados do Cliente</strong>
        <p>{data.customer.name}</p>
        <p>{data.customer.email}</p>
        <span>{data.customer.telephone.number}</span>

        <div className="adress">
          <p>Endereço de Cobrança</p>
          <span>
            {`${data.billingAddress.address1}, ${data.billingAddress.number},
          ${data.billingAddress.city}, ${data.billingAddress.state} - ${data.billingAddress.zip}`}
          </span>
          <p>Endereço de Entrega</p>
          <span>
            {`${data.billingAddress.address1}, ${data.billingAddress.number},
          ${data.billingAddress.city}, ${data.billingAddress.state} - ${data.billingAddress.zip}`}
          </span>
        </div>
      </div>
    </>
  )
}

export default Pedidos
