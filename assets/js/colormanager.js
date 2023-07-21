// HTML to render on valid submission
const createColorHtml = (id, colorHex) => {
    return `<li data-color-id=${id}>
    <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="10" style="fill:${colorHex};"/>
    </svg>
    <div class="saveHex">${colorHex} <span class="deleteBtn"><a href="">X</a></span></div>
</li>`
};

// Manages colors in app
class ColorManager {
    constructor(currentId = 0) {
        this.colors = [];
        this.currentId = currentId;
    }

    // Adding new task programmatically
    addColor (colorHex) {
        const color = {
            id: this.currentId++,
            colorHex: colorHex,
        };
        this.colors.push(color);
    }

    // Renders colors
    render() {
        const colorsHtmlList = [];

        for (let i = 0; i < this.colors.length; i++) {
            const color = this.colors[i];

            const colorHTML = createColorHtml(color.id, color.colorHex);

            colorsHtmlList.push(colorHTML);
        }

        const colorsHtml = colorsHtmlList.join('\n');
        
        const colorsList = document.querySelector('#history');
        colorsList.innerHTML = colorsHtml;
    }

    // Saves tasks to localStorage
    save() {
        const colorsJson = JSON.stringify(this.colors);
        localStorage.setItem('colors', colorsJson);
        const currentId = String(this.currentId);
        localStorage.setItem('currentId', currentId);
    }

    // Loads tasks from localStorage
    load() {
        const savedColors = localStorage.getItem('colors');
        if(savedColors) {
            this.colors = JSON.parse(savedColors);
        }

        const savedCurrentId = localStorage.getItem('currentId');
        if (savedCurrentId) {
            this.currentId = Number(savedCurrentId);
        }
    }

    // Finds matching task when called
    getColorById(colorId) {
        let foundColor;
        for (let i = 0; i < this.colors.length; i++) {
            const color = this.colors[i];
            if (color.id === colorId) {
                foundColor = color;
                break;
            }
        }
        return foundColor;
    }

    // Creates new array without selected element
    deleteColor(colorId) {
        const newColors = [];
        for (let i = 0; i < this.colors.length; i++) {
            const color = this.colors[i];
            if (color.id !== colorId) {
                newColors.push(color);
            }
        }
        this.colors = newColors;
    }

}