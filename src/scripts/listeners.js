// listeners.js
import { adicionarPlano, removerPlano } from './buttons.js';
import { planos } from './plans.js';

export function atualizarPlanos(select, planos) {
    $(select).empty();
    $(select).append("<option value='' selected disabled>Aparelho</option>");
    planos.forEach(function (plano) {
        $(select).append(`<option value="${plano.nome}">${plano.nome} - ${plano.valor}</option>`);
    });
}
export function atualizarAparelhos(select, planos) {
    $(select).empty();
    $(select).append("<option value='' selected disabled>Planos</option>");
    planos.forEach(function (plano) {
        $(select).append(`<option value="${plano.nome}">${plano.nome} - ${plano.valor}</option>`);
    });
}

export function adicionarListeners() {
    $(".container").on("click", ".addPlan", function() {
        const originalGroup = $(this).closest(".group");
        const newGroup = originalGroup.clone();
        newGroup.find("select").val('');
        adicionarPlano.call(this, newGroup, planos);
    });
    $(".container").on("click", ".removePlan", function() {
        removerPlano.call(this);
    });
    $("#createFile").on("click", () => {
        let selectedPlans = [];
        $(".group select").each(function() {
            const selectedPlanName = $(this).val();
            const selectedPlan = planos.find(plan => plan.nome === selectedPlanName);
            if (selectedPlan) {
                selectedPlans.push(selectedPlan);
            }
        });
        localStorage.setItem('selectedPlans', JSON.stringify(selectedPlans));
        window.open("pdf.html", "_blank");
    });
}
