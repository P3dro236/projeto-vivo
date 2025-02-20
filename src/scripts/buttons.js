function adicionarPlano(groupSelector, planos) {
    let newGroup = $(groupSelector); 
    $(this).closest(".group").after(newGroup);
    atualizarPlanos(newGroup.find("select"), planos);
}
function removerPlano() {
    if ($(".group").length > 1) {
        $(this).closest(".group").remove();  
    } else {
        alert("É necessário ter ao menos um plano!");
    }
}
export { adicionarPlano, removerPlano };
