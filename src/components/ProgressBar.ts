export class ProgressBar extends HTMLElement {
  isInitialized: boolean
  percentage: string

  constructor() {
    super()
    this.percentage = '0'
    this.isInitialized = false
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['percentage']
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
                <style>
                    #progress-bar {
                        position: relative;
                        height: 100%;
                        width: 100%;
                    }

                    #progress-bar-indicator {
                        background-color: blue;
                        display: inline-block;
                        height: 100%;
                        transition: width 3s ease;
                    }

                    #progress-bar-percentage {
                        display: inline-block;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-family: system-ui;
                    }
                </style>
                <div id="progress-bar">
                    <div id="progress-bar-indicator" style="width: ${this.percentage}%"></div>
                    <div id="progress-bar-percentage">${this.percentage}%</div>
                </div>
            `
    this.isInitialized = true

    this.shadowRoot.addEventListener('mouseover', () => {
      this.handleMouseOver()
    })

    this.shadowRoot.addEventListener('mouseout', () => {
      this.handleMouseOut()
    })
  }

  handleMouseOver() {}

  handleMouseOut() {}

  disInitializedCallback() {}

  handlePercentageChanged(percentage: string) {
    this.percentage = Math.min(parseInt(percentage), 100).toString()

    if (this.isInitialized) {
      const indicatorElement = this.shadowRoot.getElementById(
        'progress-bar-indicator',
      )
      const percentageElement = this.shadowRoot.getElementById(
        'progress-bar-percentage',
      )
      indicatorElement.style.width = this.percentage + '%'
      percentageElement.textContent = this.percentage + '%'
    }
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'percentage') {
      this.handlePercentageChanged(newValue)
    }
  }
}

customElements.define('progress-bar', ProgressBar)
