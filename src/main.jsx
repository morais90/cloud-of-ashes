import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import React from 'react';
import { render } from 'react-dom';
import { Grid } from './components/grid/grid.jsx';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: 5,
            columns: 12,
        };
        this.handleRowsChange = this.handleRowsChange.bind(this);
        this.handleColumnsChange = this.handleColumnsChange.bind(this);
        this.handleQuestionClick = this.handleQuestionClick.bind(this);
    }

    handleRowsChange(e) {
        this.setState({
            rows: parseInt(e.target.value)
        })
    }

    handleColumnsChange(e) {
        this.setState({
            columns: parseInt(e.target.value)
        })
    }

    handleQuestionClick(e) {
        e.preventDefault();
        $('#question').modal('show');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="page-header text-center">
                        <h2>NUVEM DE CINZAS <small>por Willian de Morais</small></h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6 pd-left-0">
                        <div className="panel panel-primary">
                            <div className="panel-heading">CONFIGURAÇÃO DA GRADE</div>
                            <div className="panel-body">
                                <form className="form-inline">
                                    <div className="form-group mg-right-1">
                                        <label className="mg-right-1">Linhas</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Linhas"
                                            name="rows"
                                            min="1"
                                            max="50"
                                            value={this.state.rows}
                                            onChange={this.handleRowsChange}
                                        />
                                    </div>
                                    <div className="form-group mg-right-1">
                                        <label className="mg-right-1">Colunas</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Colunas"
                                            name="columns"
                                            min="1"
                                            max="12"
                                            value={this.state.columns}
                                            onChange={this.handleColumnsChange}
                                        />
                                    </div>
                                    <button type="button" className="btn btn-default pull-right" onClick={this.handleQuestionClick}>
                                       Precisa de ajuda <span className="fa fa-question-circle-o fa-lg"></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-6 pd-right-0">
                        <div className="panel panel-primary">
                            <div className="panel-heading">LEGENDA</div>
                            <div className="panel-body text-center extra-padding">
                                <span className="fa fa-cloud text-muted"></span><span className="mg-right-1"> Nuvem de Cinzas</span>
                                <span className="fa fa-sun-o mg-right-1 text-yellow"></span><span className="mg-right-1"> Céu Aberto</span>
                                <span className="fa fa-plane mg-right-1 text-primary"></span><span className="mg-right-1"> Aeroporto</span>
                                <span className="fa fa-plane text-danger"></span><span className="mg-right-1"> Nuvem sob Aeroporto</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Grid rows={this.state.rows} columns={this.state.columns}/>

                <div className="modal fade" id="question">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-primary">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title text-center">AJUDA</h4>
                            </div>

                            <div className="modal-body">
                                <p className="text-justify">Por padrão, o simulador traz uma grade de 5 linhas e 12 colunas, mas esse é um dado que você pode alterar conforme sua necessidade.</p>
                                <p className="text-justify">Por exemplo, se você precisa de uma grade 10x10 é só alterar no campo linha e coluna. A grade será atualizada automaticamente.</p>
                                <p className="text-justify">O próximo passo, após definir a grade, é determinar aonde estão os aeroportos e as nuvens de cinzas. Essa é uma etapa muito fácil: é só clicar em cima do símbolo do Céu Aberto que ele passará automaticamente para o Aeroporto e clicando novamente para a Nuvem de Cinzas.</p>
                                <p className="text-justify">Se pintar alguma dúvida sobre os símbolos, você pode utilizar a legenda que fica localizada na parte superior a direita do simulador.</p>
                                <p className="text-justify">Assim que você determinar a localização, será possível observar, abaixo da grade, o resultado, ou seja, em qual dia o primeiro e o último aeroporto estará coberto pelas cinzas.</p>
                                <p className="text-justify">Essa é uma etapa muito legal: você pode fazer a conferência da simulação através do botão Simular o próximo dia, assim será possível acompanhar o avanço das nuvens na grade. Quando seu avião ficar vermelho, significa que o aeroporto foi atingido pela nuvem de cinzas.</p>
                                <p className="text-justify">Você também pode voltar um dia na simulação através do botão Simular o dia anterior.</p>
                                <p className="text-justify">Ah! Uma informação importante: qualquer mudança no tamanho da grade é necessário que você informe as novas localizações do aeroporto e da nuvem. Bom uso! :)</p>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



render(
    <App/>,
    document.getElementById('app')
);
