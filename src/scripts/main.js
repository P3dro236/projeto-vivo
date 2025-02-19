$(document).ready(function () {
    const group = `<div class='mb-3 d-flex justify-content-center align-items-center group'>
            <select role='button' id='planos' class='form-select me-2'>
                <option value='' selected disabled>Selecione o plano</option>
                <option value='Basico'>Básico - R$50</option>
                <option value='Intermediario'>Intermediário - R$80</option>
                <option value='Avancado'>Avançado - R$120</option>
            </select>
            <button class='addPlan btn btn-success p-0'>+</button>
            <button class='removePlan btn btn-danger p-0'>-</button>
        </div>`;

    // Usar jQuery para garantir que os novos elementos sejam manipuláveis
    $(".container").on("click", ".addPlan", function() {
        let newGroup = $(group);  // Criação do novo grupo com jQuery
        $(".container").append(newGroup);  // Adicionando o novo grupo à página
    });

    $(".container").on("click", ".removePlan", function() {
        if ($(".group").length > 1) {
            $(this).closest(".group").remove();  // Removendo o grupo clicado
        } else{
            alert("Você não pode remover o último plano!");
        }
    });
});
