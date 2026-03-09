---
layout: default
---

<!-- ## About Me -->

<div class="intro-section">
  <div class="intro-photo">
    <img class="profile-picture" src="./images/dpForAll.png" alt="Profile photo of Manish Shetty">
  </div>
  <div class="intro-text">
    <div id="intro-unit">
    I am a Researcher at <a href="https://metr.org">METR</a> measuring capabilities of frontier AI.
    </div>

    <div id="intro-unit">
    My PhD at UC Berkeley involved building <a href="https://gso-bench.github.io">evals</a> and <a href="https://r2e-gym.github.io/">environments</a> to elicit and measure AI capabilities on software engineering tasks. My work spanned tasks across the software lifecycle: <a href="https://r2e.dev">code completion</a>, <a href="https://gso-bench.github.io">optimization</a>, <a href="https://syzygy-project.github.io/">translation</a>, and <a href="https://github.com/microsoft/AIOpsLab">deployment</a>.
    </div>

    <div id="intro-unit">
    From 2020 to 2022, I was a research fellow at Microsoft Research.
    </div>

    <div id="intro-unit">
    <a href="mailto:manishs@berkeley.edu">Email</a> · <a href="/pdf/ManishShetty_CV.pdf">CV</a> · <a href="https://scholar.google.com/citations?user=Fcu7r3YAAAAJ&hl=en">Scholar</a> · <a href="https://github.com/manishshettym">GitHub</a> · <a href="/notes">Notes</a> · <a href="https://twitter.com/slimshetty_">𝕏</a>
    </div>
</div>
</div>

## News

{% include news.md %}

## Papers

{% include pubs.md %}

## Awards

{% include awards.md %}


## Teaching

{% include teaching.md %}

## Service

{% include service.md %}

<br><br>

<style>
  /* Timeline Container */
  .timeline {
    margin: 10px auto;
    padding: 10px;
    overflow: auto;
    height: 190px;
    font-size: 90%;
  }

  /* Outer Layer with the timeline border */
  .outer {
    border-left: 2px solid #333;
  }

  /* Card container */
  .card {
    position: relative;
    margin: 0 0 20px 20px;
    padding: 0 0 0 10px;
    color: gray;
    /* max-width: 90%; */
  }

  /* Information about the timeline */
  .info {
    display: flex;
    flex-direction: column;
  }

  /* Title of the card */
  .title {
    position: relative;
  }

  /* Timeline dot  */
  .title::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fffff8;
    border-radius: 999px;
    left: -38px;
    top: 3px;
    border: 2px solid gray;
  }

  /* remove underline for a tag with id author-name */
  a#author-name {
    text-decoration: none;
    border-bottom: none;
  }

  .badge {
  background-color: red;
  color: white;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
}
</style>
