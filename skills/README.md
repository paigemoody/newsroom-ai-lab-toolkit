# Newsroom AI Lab Toolkit Skills

Document status: Draft

Agent skills that give structured feedback and guidance on the Hacks Hackers Newsroom AI Lab Toolkit.

## Installation

Installation instructions TKTK

---

## Available Skills

### [problem-statement-feedback](./problem-statement-feedback/SKILL.md)

**Skill status:** Draft.

Reviews and coaches draft problem statements from design thinking workshops.

Triggers when someone shares a problem statement in the format `[User] needs [need] so that [goal]` and wants feedback, or asks for help refining a problem statement.

**What it produces:** Structured feedback covering what's working, what to sharpen, follow-up questions, and 1–3 alternative draft statements.

📥 [Download problem-statement-feedback.skill](../../releases/latest/download/problem-statement-feedback.skill)

## Adding Skills to Claude

1. Download the `.skill` file from the release link above
2. Open Claude and navigate to your Project
3. Click **Add content → Upload file** and select the `.skill` file
4. Claude will use the skill automatically when the trigger conditions are met

## Adding Skills to LibreChat TKTK

## Contributing

Each directory in this `skills/` directory is a skill and contains a SKILL.md.

To add a skill, create a new folder under `skills/` and open a pull request. Packaged `.skill` files are generated and attached to releases automatically (see `.github/workflows/package-skills.yml`).