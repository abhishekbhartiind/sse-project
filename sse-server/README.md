```bash
curl -H Accept:text/event-stream http://localhost:3001/events

curl -X POST \
 -H "Content-Type: application/json" \
 -d '{"info": "Shark teeth are embedded in the gums rather than directly affixed to the jaw, and are constantly replaced throughout life.", "source": "https://en.wikipedia.org/wiki/Shark"}'\
 -s http://localhost:3001/fact

curl -H Accept:text/event-stream http://localhost:3001/events
```

```bash
curl -H Accept:text/event-stream http://localhost:3001/events
data: [{"info":"Shark teeth are embedded in the gums rather than directly affixed to the jaw, and are constantly replaced throughout life.","source":"https://en.wikipedia.org/wiki/Shark"}]
```
