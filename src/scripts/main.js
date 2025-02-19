
import { adicionarPlano, removerPlano } from 'buttons.js';
$(document).ready(function () {
    const planos = [
        { nome: 'Controle 8GB', valor: 'R$XX,XX' },
        { nome: 'Plano pós', valor: 'R$XX,XX' },
        { nome: 'Fámilia II', valor: 'R$XX,XX' },
        { nome: 'Fámilia V', valor: 'R$XX,XX' }
    ];
    
    const group = `<div class='mb-3 d-flex justify-content-center align-items-center group'>
            <select class='form-select me-2' role='button'>
                <option value='' selected disabled>Selecione o plano</option>
            </select>
            <button class='addPlan btn btn-success p-0'>+</button>
            <button class='removePlan btn btn-danger p-0'>-</button>
        </div>`;

    function atualizarPlanos(select, planos) {
        $(select).empty();
        $(select).append("<option value='' selected disabled>Selecione o plano</option>");
        planos.forEach(function (plano) {
            $(select).append(`<option value="${plano.nome}">${plano.nome} - ${plano.valor}</option>`);
        });
    }

    atualizarPlanos($(".group select").first(), planos);

    $(".container").on("click", ".addPlan", function() {
        adicionarPlano.call(this, group, planos);
    });

    $(".container").on("click", ".removePlan", function() {
        removerPlano.call(this);
    });
});
