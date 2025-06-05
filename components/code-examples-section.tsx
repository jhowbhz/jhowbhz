"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ClipboardCopy, Check } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const codeSnippets = {
  javascript: {
    label: "JavaScript (SDK)",
    language: "javascript",
    code: `import { createVehiclesApi } from 'apigratis-sdk-nodejs';

const vehiclesApi = createVehiclesApi({
  BearerToken: 'bearer_token',
  DeviceToken: 'device_token',
});

vehiclesApi
  .request('/fipe', {
    placa: '__Placa__',
  })
  .then(resp => console.log(JSON.stringify(resp, undefined, '  ')));`,
  },
  python: {
    label: "Python (SDK)",
    language: "python",
    code: `from api_brasil import APIBrasilClient, VehiclesAPI
from api_brasil.features.vehicles import Endpoints

api_brasil_client = APIBrasilClient(bearer_token="your_bearer_token_here")

vehicles_api = VehiclesAPI(api_brasil_client=api_brasil_client, device_token="your_device_token_here")
vehicles_api.set_plate(plate="ABC-1234")  # Placa do veículo
response, status_code = vehicles_api.consulta(vechiles_api_endpoint=Endpoints.dados) # Consulta os dados do veículo

print(response, status_code)`,
  },
  php: {
    label: "PHP (SDK)",
    language: "php",
    code: `<?php

require_once('vendor/autoload.php');
use ApiBrasil\\Service;

$fipe = Service::Vehicles("fipe", [
  "Bearer" => "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.....",
  "DeviceToken" => "d019580b-3c8c-40e3-b9a0....",
  "body" => [
      "placa" => "HBM6603",
  ]
]);

var_dump($fipe);
die;`,
  },
  csharp: {
    label: "C# (SDK)",
    language: "csharp",
    code: `using ApiBrasil;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

public class YourController : ControllerBase
{
  private readonly ApiBrasilConfiguration _apiBrasilConfig;

  public YourController(IOptions<ApiBrasilConfiguration> apiBrasilOptions)
  {
      _apiBrasilConfig = apiBrasilOptions.Value;
  }

  public class ApiBrasilDto
  {
      public string Type { get; set; }
      public string Action { get; set; }
      public object Content { get; set; }
  }

  [HttpPost("v1/apibrasil")]
  public async Task<IActionResult> TestApiBrasil([FromBody] ApiBrasilDto apiRequest)
  {

      if (apiRequest == null) {
          return BadRequest("Request body cannot be null.");
      }

      try {

          var result = new { Message = "Called ApiBrasil.GenericCaller successfully (placeholder)", apiRequest.Type, apiRequest.Action };
          await Task.Delay(100); // Simulate async work
          return Ok(result);

      } catch (Exception ex) {
          return StatusCode(500, new { Error = "An unexpected error occurred.", Details = ex.Message });
      }
  }
}`,
  },
}

type LanguageKey = keyof typeof codeSnippets

export default function CodeExamplesSection() {
  const [selectedLang, setSelectedLang] = useState<LanguageKey>("javascript")
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLang].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const customStyle = {
    ...vscDarkPlus,
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      backgroundColor: "transparent",
      padding: "1.25rem", // Increased padding for better spacing
      margin: "0",
      fontSize: "0.875rem",
      lineHeight: "1.6", // Improved line height
    },
    // You can add more specific token styling here if needed, e.g.:
    // 'code[class*="language-"]': {
    //   fontFamily: '"Fira Code", "Dank Mono", monospace', // Example custom font
    // },
  }

  return (
    <section id="exemplos" className="py-20 md:py-28 code-examples-section-bg">
      {" "}
      {/* Changed class here */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wider mb-3 fade-in-up-slow">
            Comece Rápido
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 fade-in-up-slow delay-100">
            Exemplos de Código <span className="animated-gradient-text">Práticos</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-slow delay-200">
            Integre nossas APIs em seus projetos com estes exemplos simples e diretos.{" "}
            <a
              href="https://github.com/APIBrasil/apigratis-exemplos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Copie, cole e comece a desenvolver em minutos
            </a>
            .
          </p>
        </div>

        <Card className="glass-card-modern shadow-2xl fade-in-up-slow delay-300">
          <CardHeader className="border-b border-border p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex space-x-2">
                {(Object.keys(codeSnippets) as LanguageKey[]).map((lang) => (
                  <Button
                    key={lang}
                    variant={selectedLang === lang ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLang(lang)}
                    className={`transition-all ${
                      selectedLang === lang
                        ? "bg-primary text-primary-foreground button-glow-effect"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    {codeSnippets[lang].label}
                  </Button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="text-muted-foreground hover:text-primary"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-500" /> Copiado!
                  </>
                ) : (
                  <>
                    <ClipboardCopy className="w-4 h-4 mr-2" /> Copiar Código
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="code-block-container my-0 rounded-t-none border-0 shadow-none">
              <div className="code-block-header">{codeSnippets[selectedLang].label}</div>
              <div className="code-block">
                <SyntaxHighlighter
                  language={codeSnippets[selectedLang].language}
                  style={customStyle}
                  showLineNumbers={false}
                  wrapLines={true}
                  wrapLongLines={true}
                  lineNumberStyle={{ color: "hsl(var(--muted-foreground))", opacity: 0.6, fontSize: "0.75rem" }}
                >
                  {codeSnippets[selectedLang].code.trim()}
                </SyntaxHighlighter>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Removed the paragraph about integrating syntax highlighters as it's now integrated */}
      </div>
    </section>
  )
}
