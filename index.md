---
layout: default
---

<!-- ## About Me -->

<img class="profile-picture" src="./images/dpForAll.png">
<div>
<div id="intro-unit">
I am a PhD student at <a href="https://www.berkeley.edu/">UC Berkeley</a> in the <a href="https://sky.cs.berkeley.edu/">Sky
Lab</a> advised by <a href="https://people.eecs.berkeley.edu/~ksen">Koushik Sen</a>.
</div>

<div id="intro-unit">
My work involves improving the capabilities and reliability of <i>large-language models for software engineering</i> tasks. 
I approach this as (1) stronger model evaluations and (2) scaling with symbolic techniques like search.
A key piece of this is <i>breathing life into static codebases</i>, enabling program analysis and execution.
</div>

<div id="intro-unit">
Previously, I worked at <a href="https://www.microsoft.com/en-us/research/">Microsoft Research (MSR)</a> in the <a href="https://www.microsoft.com/en-us/research/theme/systems/">Programming Languages and Systems Group</a>.
</div>

<div id="intro-unit" style="font-size: smaller;">
  If you'd like to collaborate, drop me an email at: manishs@berkeley.edu
</div>
</div>

## News

<div class="timeline">
  <div class="outer">
    <div class="card">
      <div class="info">
        <span><span class="title">Apr 2024. </span>
          🏆 Honored to have received the <a href="https://www2.eecs.berkeley.edu/Students/Awards/12/">Tong Leong Lim
            Pre-Doctoral Prize</a> at UC Berkeley
        </span>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <span><span class="title">Mar 2024. </span>
          🏆 Honored to have received the 2024 <a
            href="https://gsi.berkeley.edu/programs-services/award-programs/ogsi/">Outstanding Graduate Student
            Instructor Award</a> at UC Berkeley
        </span>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <span><span class="title">Jan 2024. </span>
          Interning (returning) with the <a
            href="https://www.microsoft.com/en-us/research/group/systems-innovation/">Systems Innovation</a> group at
          Microsoft Research in Summer'24! Exploring next-generation AI Assisted System Reliability.</span>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <span><span class="title">Sept 2023. </span>
          ✔︎ Passed the <a href="https://eecs.berkeley.edu/resources/grads/phd/prelims/exam-prep">Programming Languages
            Preliminary Exam</a> at UC Berkeley!</span>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <span><span class="title">May 2023. </span>
          Taught my first class: <a href="https://sites.google.com/berkeley.edu/cs164sp23/home">CS164: Compilers and
            Programming Languages</a> at UC Berkeley!</span>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <span><span class="title">Nov 2022. </span>
          🏆 Our <a href="https://dl.acm.org/doi/10.1145/3542929.3563482">empirical study</a> @ Microsoft Research on
          production incidents in large-scale cloud services
          received the <a href="https://twitter.com/ACMSoCC/status/1590128032886685696?s=20"
            style="color: #D33682; font-weight: 500;">Best Paper Award 🏆</a> at <b>SoCC 2022</b>. </span>
      </div>
    </div>
    <div class="card">
      <div class="info">
        <span><span class="title">Aug 2022. </span>
          Started my Ph.D. at UC Berkeley advised by <a href="https://people.eecs.berkeley.edu/~ksen">Prof. Koushik
            Sen</a>. Joining the <a href="https://sky.cs.berkeley.edu/">Sky Lab</a> and the Programming Systems
          group!</span>
      </div>
    </div>
  </div>
</div>


## Publications

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
    height: 210px;
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
