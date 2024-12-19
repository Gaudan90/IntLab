document.addEventListener('DOMContentLoaded', function() {
    const transportConfig = {
        bus: {
            elementId: 'busIcon',
            template: {
                title: 'Trasporto Pubblico',
                sections: [
                    {
                        type: 'message',
                        content: 'Fai una scelta sostenibile, lascia l\'auto a casa e vieni con i mezzi!'
                    },
                    {
                        type: 'info',
                        content: 'Le linee urbane di superficie che raggiungono il Lingotto Fiere sono il 41 - 260 - 299T.'
                    },
                    {
                        type: 'note',
                        content: 'Per eventuali modifiche o aggiornamenti sulle linee urbane vai su GTT - Gruppo Torinese Trasporti.'
                    }
                ]
            }
        },
        car: {
            elementId: 'carIcon',
            template: {
                title: 'Come Arrivare in Auto',
                sections: [
                    {
                        type: 'intro',
                        content: 'Per raggiungere la Palazzina di Caccia di Stupinigi:'
                    },
                    {
                        type: 'directions',
                        content: [
                            'Dal centro di Torino, prendi Corso Unione Sovietica in direzione sud',
                            'Prosegui dritto fino a raggiungere la rotonda di Stupinigi',
                            'Alla rotonda, prendi l\'uscita per la Palazzina di Caccia',
                            'Troverai ampio parcheggio nelle vicinanze della location'
                        ]
                    }
                ]
            }
        }
    };

    class TransportInfoManager {
        constructor(config) {
            this.config = config;
            this.activeIcon = null;
            this.transportInfo = document.getElementById('transportInfo');
            this.mapContainer = document.querySelector('.map-container');
            this.initialize();
        }

        initialize() {
            Object.keys(this.config).forEach(transportType => {
                const element = document.getElementById(this.config[transportType].elementId);
                if (element) {
                    element.addEventListener('click', () => this.toggleTransportInfo(transportType, element));
                }
            });
        }

        createContent(template) {
            const container = document.createElement('div');
            container.className = 'transport-info-content';

            const title = document.createElement('h3');
            title.textContent = template.title;
            container.appendChild(title);

            template.sections.forEach(section => {
                if (section.type === 'directions') {
                    const list = document.createElement('ol');
                    section.content.forEach(step => {
                        const item = document.createElement('li');
                        item.textContent = step;
                        list.appendChild(item);
                    });
                    container.appendChild(list);
                } else {
                    const paragraph = document.createElement('p');
                    paragraph.className = `transport-${section.type}`;
                    paragraph.textContent = section.content;
                    container.appendChild(paragraph);
                }
            });

            return container;
        }

        toggleTransportInfo(transportType, clickedIcon) {
            if (this.activeIcon === clickedIcon) {
                this.hideInfo();
            } else {
                this.showInfo(transportType, clickedIcon);
            }
        }

        hideInfo() {
            this.transportInfo.style.opacity = '0';
            setTimeout(() => {
                this.transportInfo.classList.remove('visible');
                this.mapContainer.classList.remove('shifted');
                this.transportInfo.innerHTML = '';
            }, 300);
            this.activeIcon.classList.remove('active');
            this.activeIcon = null;
        }

        showInfo(transportType, clickedIcon) {
            if (this.activeIcon) {
                this.activeIcon.classList.remove('active');
            }
            clickedIcon.classList.add('active');
            
            this.transportInfo.style.opacity = '0';
            setTimeout(() => {
                this.transportInfo.innerHTML = '';
                const content = this.createContent(this.config[transportType].template);
                this.transportInfo.appendChild(content);
                this.transportInfo.classList.add('visible');
                this.mapContainer.classList.add('shifted');
                this.transportInfo.style.opacity = '1';
            }, 300);
            
            this.activeIcon = clickedIcon;
        }
    }

    // Initialize the transport information manager
    const transportManager = new TransportInfoManager(transportConfig);
});