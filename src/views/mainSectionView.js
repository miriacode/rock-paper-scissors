class MainSectionView {
  static loadComponents() {
    const options = [...document.querySelectorAll(".hands")[0].children];
    const rulesBtn = document.querySelector(".rules");
    //Main Event Listeners
    options.forEach((option) =>
      option.addEventListener("click", () => {
        console.log(option.classList[1].slice(10)); //rock-paper-scissors
      })
    );

    rulesBtn.addEventListener("click", () => {
      replaceContentWithTemplate("rules-section");
      RulesSectionView.loadComponents();
    });
  }
}
