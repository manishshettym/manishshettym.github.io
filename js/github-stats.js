jQuery.githubUser = function (username, callback) {
    jQuery.getJSON('https://api.github.com/users/' + username + '/repos?callback=?', callback)
}

jQuery.fn.loadRepositories = function (username) {
    this.html("<span>Querying GitHub for " + username + "'s repositories...</span>");

    var target = this;
    $.githubUser(username, function (data) {
        var repos = data.data; // JSON Parsing
        sortByStars(repos);

        forbidden_repos = [username + '.github.io', username, "DeepClustering", "hello-world", 
                            "OpenArxiv", "Sn_AI_ke", "BIRD-SHOOTOUT", "Code-Lib", "GKQuiz", "Trie-umph"]

        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function () {
            if (! forbidden_repos.includes(this.name) && this.fork == false) {
                list.append('<dt><a href="' 
                            + (this.homepage ? this.homepage : this.html_url) + '">' 
                            + this.name + '</a> &nbsp;&nbsp;&nbsp;' 
                            + (this.language? ('('+this.language+')&nbsp;&nbsp;') : '')
                            + (this.stargazers_count ? 
                                        ('<svg aria-label="stars" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>' + this.stargazers_count)
                                        : ''
                                    )
                            + (this.forks ?
                                    ( '&nbsp;&nbsp;&nbsp; <svg aria-label="forks" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>' + this.forks)
                                    : ''
                                )
                            + '<p>' + this.description + '</p>'
                            );
                
                if(this.name == "ResumeRise"){
                    list.append('<p> Read the <a href="https://github.com/ManishShettyM/ResumeRise/blob/master/Final%20Report/INSIGHT_FinalReport.pdf">Experience Paper</a> for more details. </p>')
                }           
                
                if(this.name == "Offensive-Text-Detection"){
                    list.append('<p> Read the <a href="https://github.com/ManishShettyM/Offensive-Text-Detection/blob/master/Experience_Paper.pdf">Experience Paper</a> for more details. </p>')
                }

                if(this.name == "CANN"){
                    list.append('<p> Read the <a href="https://github.com/ManishShettyM/CANN/blob/master/Analysis/CANN.pdf">Experience Paper</a> for more details. </p>')
                }

                list.append('</dt> </br>')
            }
        });
    });

    function sortByStars(repos) {
        repos.sort(function (a, b) {
            return b.stargazers_count - a.stargazers_count;
        });
    }
};