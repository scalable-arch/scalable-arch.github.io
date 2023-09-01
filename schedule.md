---
title: Schedule
permalink: /schedule/
layout: posts-page
---

## PROFESSOR

<iframe src="https://calendar.google.com/calendar/u/0/embed?src=dale40@gmail.com&ctz=Asia/Seoul&pli=1" class="embed-responsive" height="600px"></iframe>

## GROUP

<iframe src=" https://calendar.google.com/calendar/u/0/embed?src=cc3381e63109ca3620f9dc700200331094a[…]8bfe3ea4b99f846d68@group.calendar.google.com&ctz=Asia/Seoul" class="embed-responsive" height="600px"></iframe>

<ul>
{% for conference in site.data.conferences %}
{% assign conf = conference[1] %}
{% assign deadline = Date.strptime(conf.series[0].deadline, "%B-%d-%Y") %}
  <li>
    {{ conf.series[0].deadline }}
    {{ deadline }}
    {{ conf.title }} {{ deadline.year }}
    Start date: {{ conf.series[0].start }}
    End date: {{ conf.series[0].end }}
    Deadline: {{ deadline.year }}
    Deadline: {{ deadline.month }}
    Deadline: {{ deadline.day }}
    ({{ org.members | size }} members)
    ({{ org.series[0] | size }} members)
  </li>
{% endfor %}
</ul>
