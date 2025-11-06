FROM python:3.12-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

EXPOSE 5001

# Run the server
# CMD ["python", "server.py"]
CMD ["gunicorn", "-w", "2", "--timeout", "60", "--bind", "0.0.0.0:5001", "server:app"]