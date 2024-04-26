require 'rake_npm'
require 'confidante'

require './rake/environment.rb'
require './rake/command.rb'

namespace :app do
    desc "Installs node dependencies"
    task :install, [:environment] do |_, args|
        args.with_defaults(environment: Environment.default)

        install_command = args[:environment] == "ci" ? "npm ci" : "npm install"

        puts "Installing dependencies using #{install_command}"
        Command.run(install_command)
    end

    RakeNPM.define_script_tasks(argument_names: [:environment]) do |t, args|

        puts Environment.default
        args.with_defaults(environment: Environment.default)

        Rake::Task["app:install"].invoke(*args)

        if t.name.to_s.include?('start')
            Rake::Task["app:build"].invoke(*args)
        end
    end

    desc "Removes aall non-production dependencies"
    task :prune_dependencies do
        Command.run("npm prune --omit=dev")
    end

    desc "Runs all checks"
    task :check => [:'app:format:fix', :'app:lint:fix', :'app:test:unit', :'app:test:journey', :'app:build']
end

task :default => ['app:check']