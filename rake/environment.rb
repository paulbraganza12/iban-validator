module Environment
    class <<self
        def default
            if ENV['ci']
                'ci'
            else
                'local'
            end
        end
    end
end
    