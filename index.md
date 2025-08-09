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
    I am a PhD student at <a href="https://www.berkeley.edu/">UC Berkeley</a> in the <a href="https://sky.cs.berkeley.edu/">Sky
    Lab</a> studying AI4Code.
    </div>

    <div id="intro-unit">I work on turning language models into capable software agents.</div>

    <div id="intro-unit">
    My focus has been building <a href="https://gso-bench.github.io">benchmarks</a> ("evals") and <a href="https://r2e-gym.github.io/">environments</a> that either stage long-horizon and challenging coding tasks or elicit more from models by scaling compute. My work spans the software lifecycle: <a href="https://r2e.dev">code completion</a>, <a href="https://gso-bench.github.io"> optimization</a>, <a href="https://syzygy-project.github.io/">translation</a>, and <a href="https://github.com/microsoft/AIOpsLab">deployment</a>.
    </div>

    <div id="intro-unit">
    From 2020 to 2022, I was a research fellow at <a href="https://www.microsoft.com/en-us/research/">Microsoft Research</a>.
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
