---
layout: default
title: 开源中国开源项目
keywords: 开源,open-source,GitHub,开源项目
description: 开源改变世界。
permalink: /open-source-gitee/
---

{% assign sorted_repos = site.data.gitees | reverse %}

<section class="container">
    <header class="text-center">
        <h2>开源项目</h2>
        <p class="lead">已在开源中国Gitee平台开源<span class="repo-count">{{sorted_repos.size}}</span>个项目</p>
    </header>
    <div class="repo-list">
    {% for gitee in site.data.gitees %}
    <a href="{{gitee.url}}" target="_blank" class="one-third-column card text-center">
                        <div class="thumbnail">
                            <div class="card-image geopattern" data-pattern-id="{{gitee.reponame}}">
                                <div class="card-image-cell">
                                    <h3 class="card-title">
                                        {{gitee.reponame}}
                                    </h3>
                                </div>
                            </div>
                            <div class="caption">
                                <div class="card-description">
                                    <p class="card-text">{{gitee.description}}</p>
                                </div>
                                <div class="card-text">
                                    <span class="meta-info" title="{{gitee.stars}} stars">
                                        <span class="octicon octicon-star"></span> {{gitee.stars}}
                                    </span>
                                    <span class="meta-info" title="{{gitee.forks}} forks">
                                        <span class="octicon octicon-git-branch"></span> {{gitee.forks}}
                                    </span>
                                    <span class="meta-info" title="Last updated：{{gitee.lastupt}}">
                                        <span class="octicon octicon-clock"></span> {{gitee.lastupt}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
    {% endfor %}
        
     
    </div>
</section>
 