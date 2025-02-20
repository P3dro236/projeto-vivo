// main.js
import { planos } from './plans.js';
import { atualizarPlanos, adicionarListeners } from './listeners.js';

$(document).ready(function () {
    atualizarPlanos($(".group select").first(), planos);
    adicionarListeners();
});
