import { createServer, Model } from "miragejs";

import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: "1",
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 5000,
          createdAt: new Date('2022-10-20 09:00:00')
        },
        {
          id: "2",
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1480,
          createdAt: new Date('2022-10-23 11:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", (req, res) => {
      return this.schema.all('transactions');
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transactions', data);
    });
  },
});

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
