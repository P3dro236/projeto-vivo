function adicionarPlano(groupSelector, planos) {
    if ($(".group").length < 8) {
        let newGroup = $(groupSelector); 
        $(this).closest(".group").after(newGroup);
        atualizarPlanos(newGroup.find("select"), planos);
    } else {
        alert("Número máximo de planos atingido!");
    }
}
function removerPlano() {
    if ($(".group").length > 1) {
        $(this).closest(".group").remove();  
    } else {
        alert("É necessário ter ao menos um plano!");
    }
}
export { adicionarPlano, removerPlano };
