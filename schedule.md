---
title: Schedule
permalink: /schedule/
layout: posts-page
---

## Principal Investigator

<iframe src="https://calendar.google.com/calendar/u/0/embed?src=dale40@gmail.com&ctz=Asia/Seoul&pli=1" class="embed-responsive" height="600px"></iframe>

## GROUP

<iframe src=" https://calendar.google.com/calendar/u/0/embed?src=cc3381e63109ca3620f9dc700200331094a[…]8bfe3ea4b99f846d68@group.calendar.google.com&ctz=Asia/Seoul" class="embed-responsive" height="600px"></iframe>

## Conferences
<table>
  <tr>
    <th> Submission Month </th>
    <th> Venue </th>
  </tr>
  {% assign months = "January February March April May June July August September October November December" | split: " " %}
  {% for month in months %}
  <tr>
    <td> {{ month }} </td>
    <td>
      {% for conference in site.data.conferences %}
      {% assign conf = conference[1] %}
      {% assign deadline = conf.series[0].deadline | split: "-" %}
      {{ conf.series[0].deadline }}
      {{ deadline }}
      {{ conf.title }} {{ deadline.year }}
      Start date: {{ conf.series[0].start }}
      End date: {{ conf.series[0].end }}
      ({{ org.members | size }} members)
      ({{ org.series[0] | size }} members)
      {% endfor %}
    </td>
  </tr>
  {% endfor %}
</table>
