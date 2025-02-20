// listeners.js
import { adicionarPlano, removerPlano, gerarPdf } from './buttons.js';
import { planos } from './plans.js';

export function atualizarPlanos(select, planos) {
    $(select).empty();
    $(select).append("<option value='' selected disabled>Selecione o plano</option>");
    planos.forEach(function (plano) {
        $(select).append(`<option value="${plano.nome}">${plano.nome} - ${plano.valor}</option>`);
    });
}

export function adicionarListeners() {
    $(".container").on("click", ".addPlan", function() {
        adicionarPlano.call(this, `<div class='mb-3 d-flex justify-content-center align-items-center group'>
            <select class='form-select me-2' role='button'>
                <option value='' selected disabled>Selecione o plano</option>
            </select>
            <button class='addPlan btn btn-success p-0'>+</button>
            <button class='removePlan btn btn-danger p-0'>-</button>
        </div>`, planos);
    });

    $(".container").on("click", ".removePlan", function() {
        removerPlano.call(this);
    });
    $("#createFile").on("click", function(){
        gerarPdf.call(this)
    })
}
