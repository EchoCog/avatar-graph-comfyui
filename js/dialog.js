import { ComfyDialog, $el } from '../../scripts/ui.js';

export class InfoDialog extends ComfyDialog {
	constructor() {
		super();
		this.element.classList.add("comfy-normal-modal");
	}
	createButtons() {
		return [
			$el("button", {
				class: 'z-[999]',
				type: "button",
				textContent: "Close",
				onclick: () => this.close(),
			}),
		];
	}

	close() {
		this.element.style.display = "none";
	}

	show(html) {
		if (typeof html === "string") {
			this.textElement.innerHTML = html;
		} else {
			this.textElement.replaceChildren(html);
		}
		this.element.style.display = "flex";
		this.element.style.zIndex = 1001;
	}
}

export const infoDialog = new InfoDialog()