# jev-columns

**Maintain versioned semantic decisions as indexed columns in ordinary PostgreSQL with a reclaimable work queue.**

[![Tests](https://github.com/gbesse/jev-columns/actions/workflows/test.yml/badge.svg)](https://github.com/gbesse/jev-columns/actions/workflows/test.yml) ![MIT](https://img.shields.io/badge/license-MIT-blue) ![Node](https://img.shields.io/badge/node-22%2B-green) ![Public alpha](https://img.shields.io/badge/status-public_alpha-orange)

## 30-second offline quick start
`git clone https://github.com/gbesse/jev-columns.git && cd jev-columns && npm install && npm run demo`. The demo is in memory and synthetic.

## Call real Jev
Set `TYPESAFE_API_KEY` for a reviewed worker adapter; paid requests go to `api.typesafe.ai`. `npm run live-smoke` makes zero calls because this alpha does not wire the provider.

## Library and integration
`initSql`, `installSql`, `claimSql`, `dependencies`, `work`, `backfill`, `bump`, and `status` expose the schema and worker primitives. `pg` is the only runtime dependency. `MemoryQueue` makes queue behavior testable without a server.

## How it decides
A definition pins question, kind, criteria, source expression, threshold, target columns and version. Workers claim with `FOR UPDATE SKIP LOCKED`; stale claims become eligible, success atomically writes decision/probability/version/time and dequeues, errors retry then dead-letter. Version bumps make older values stale. Conservative dependency extraction prefers extra enqueueing over missed changes.

## Boundaries
The CLI, actual trigger function, pg transaction adapter, real Postgres integration test and Jev transport remain unwired in this alpha; SQL generators and worker semantics are complete/tested building blocks. MySQL is out of scope. Source expressions are trusted operator SQL. No live benchmark is claimed.

## Shareable demo report

Run `npm run demo:report` to capture this repository’s bundled example as one JSON object with the project purpose, version and complete demo output. The command fails if the demo fails, so the report is useful when sharing a reproducible first look or reporting unexpected behavior. The bundled demo’s data and safety boundaries still apply.

## Validation
Run `npm run check && npm run typecheck && npm test && npm run demo`; CI uses Node 22 and 24. A future real-Postgres suite will be conditional on `DATABASE_URL`.

## Related projects
[DecisionPacks](https://github.com/gbesse/decisionpacks), [IntentBus](https://github.com/gbesse/intentbus), and [jev-codebook](https://github.com/gbesse/jev-codebook).

Independent project; not affiliated with TypeSafe AI. [API docs](https://docs.typesafe.ai/api) · [model notes](https://docs.typesafe.ai/model-jaggedness/jev-1.13/)
