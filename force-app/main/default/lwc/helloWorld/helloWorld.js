import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
        greeting;
        clickedButtonLabelName;
        clickedButtonLabelIdade;
        clickedButtonLabelPhone;
        age;
        phone;
        estudante = false;
        msgEstudante;
        serie;
        sexo;
        vsexoSelecionado = false;
        show;
        pais;
        mapMarkers = [];
        zoomLevel;

        changeHandler(event) {
        this.greeting = event.target.value;
        }

        changeHandlerIdade(event) {
            this.age = event.target.value;
        }

        changeHandlerPhone(event) {
            this.phone = event.target.value;
        }

        changeHandlerCheckbox(event) {
            this.estudante = event.target.checked;
            if (!this.estudante) this.serie = null;
        }

        changeHandlerMap(event) {
            this.pais = event.target.value;
        }

    get optionsSerie() {
        return [
            { label: 'First', value: 'first' },
            { label: 'Second', value: 'second' },
            { label: 'Third', value: 'third' },
        ];
    }

    handleChangeSerie(event) {
        this.serie = event.detail.value;
    }
        
            handleClick(event) {
                //this.clickedButtonLabelName = this.greeting;
                this.clickedButtonLabelIdade = this.age;
                this.clickedButtonLabelPhone = this.phone;
                this.greeting = null;
                this.age = null;
                this.phone = null;
            
            }

        handleClick2(event) {
            this.clickedButtonLabelName = null;
            this.clickedButtonLabelIdade = null;
            this.clickedButtonLabelPhone = null;
            
            
        }

        get options() {
            return [
                { label: 'Masculino', value: 'masc' },
                { label: 'Feminino', value: 'fem' },
            ];
        }

        changeHandlerSexo(event) {
            this.sexoSelecionado = event.target.value;
            this.show = true;
            if (this.sexoSelecionado == 'masc'){
                this.sexo = true;
            } else {
                this.sexo = false;
            }
        }

        handleClickMap(event) {

            if(this.pais){

                this.mapMarkers = [
                    {

                        location:{
                                
                            Country: this.pais,

                        },

                    },
                ];

            }

            this.zoomLevel = 6;
        }

    }