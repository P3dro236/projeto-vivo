export function atualizarPlanos(select, planos) {
    $(select).empty();
    $(select).append("<option value='' selected disabled>Selecione o plano</option>");
    planos.forEach(function (plano) {
        $(select).append(`<option value="${plano.nome}">${plano.nome} - ${plano.valor}</option>`);
    });
}
export function adicionarPlano(groupSelector, planos) {
    let newGroup = $(groupSelector); 
    $(this).closest(".group").after(newGroup);
    atualizarPlanos(newGroup.find("select"), planos);
}
export function removerPlano() {
    if ($(".group").length > 1) {
        $(this).closest(".group").remove();  
    } else {
        alert("É necessário ter ao menos um plano!");
    }
}