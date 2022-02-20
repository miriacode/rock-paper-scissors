class RulesSectionView {
  static loadComponents() {
    //Rules Event Listener
    const crossBtn = document.querySelector(".rules-section__cross");
    crossBtn.addEventListener("click", () => {
      replaceContentWithTemplate("main-section");
      MainSectionView.loadComponents();
    });
  }
}
