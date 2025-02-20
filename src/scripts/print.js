$(document).ready(function() {
    const selectedPlans = JSON.parse(localStorage.getItem('selectedPlans'));
    const $plansContainer = $('#plans');
    if(selectedPlans.length !== 8){
        do {
            const temp = {
                nome: "",
                valor: "",
                caracteristicas: ""
            };
            selectedPlans.push(temp);
        } while (selectedPlans.length < 8);
    }

    if (selectedPlans && $plansContainer.length) {
        selectedPlans.forEach(plan => {
            const $planElement = $('<div>', { class: 'col-3' }).html(`
                <div class="card m-3">
                    <div class="card-header">
                        <h3 class="text-center fs-4">${plan.nome}</h3>
                    </div>
                    <div class="card-body text-center">
                        ${plan.caracteristicas}
                    </div>
                    <div class="card-footer text-center">
                        <span>Valor: ${plan.valor}</span>
                    </div>
                </div>
            `);
            $plansContainer.append($planElement);
        });
    }
    $("#printPage").on("click", () =>{
        window.print();
    })
});
