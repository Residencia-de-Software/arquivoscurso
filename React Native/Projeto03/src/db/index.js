import Realm from 'realm';
import {Produtos} from './models/Produtos';

const realm = new Realm({schema: [Produtos]});

export const cadastrarProduto = carro => {
  realm.open({schema: [Produtos]}).then(() => {
    realm.write(() => {
      realm.create('Produtos', carro);
    });
    realm.close;
  });
};

export const listarProdutos = () => {
  realm.open({schema: [Produtos]}).then(() => {
    return realm.objects('Produtos');
  });
};
