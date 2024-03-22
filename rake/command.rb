require 'open3'

module Command
    class << self
        def run(command, environment={}, config={})
            stdout_str, status = Open3.capture2(environment.transform_keys(&:to_s), command)
            unless status.success?
                raise("Failed to run:\n #{command} \n\n #{stdout_str}")
             end
            unless config[:silent]
            puts stdout_str
            end
            stdout_str
        end
    end
end